#!/bin/sh
set -e # 任何命令失敗時立即退出


echo "--- hello ---"
echo "--- Custom Entrypoint Script Started ---"
echo "Current working directory: $(pwd)"
echo "PATH: $PATH"

WORKFLOW_FILE="/files/n8n_flower_order_system_wf.json"

echo "檢查 /files/ 目錄內容..."
ls -l /files/

# 檢查 workflow 檔案是否存在於容器內部
if [ -f "$WORKFLOW_FILE" ]; then
  echo "✅ Workflow 檔案已找到：$WORKFLOW_FILE"
else
  echo "❌ Workflow 檔案未找到：$WORKFLOW_FILE。請檢查 Dockerfile 中的 COPY 指令。"
  exit 1 # 如果檔案未找到則退出
fi

echo "檢查 n8n 命令路徑..."
# 嘗試找到 n8n 命令，並輸出其路徑或錯誤
which n8n || { echo "❌ n8n 命令未在 PATH 中找到！請檢查 n8n 映像或 PATH 設定。"; exit 1; }

# 匯入 workflow（會覆蓋同名的現有 workflow）
echo "📥 正在匯入 workflow 從 $WORKFLOW_FILE..."
# 使用 n8n 命令本身，讓 PATH 處理其路徑
# 將命令輸出重定向到標準輸出和錯誤輸出，並檢查其退出狀態
if n8n import:workflow --input "$WORKFLOW_FILE" --overwrite; then
  echo "✅ Workflow 匯入命令已成功執行。"
else
  echo "❌ n8n import:workflow 失敗！請檢查日誌以獲取詳細錯誤。"
  exit 1 # 如果匯入失敗則退出
fi

# 啟動 n8n
echo "🚀 正在啟動 n8n..."
# 使用 n8n 命令本身，讓 PATH 處理其路徑
# 使用 exec 替換當前 shell 進程為 n8n 進程
exec n8n start
echo "--- n8n 啟動命令已發出。如果看到此訊息，則 exec 可能失敗或 n8n 正在後台啟動。---"
