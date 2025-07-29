# 使用官方 n8n 映像
FROM n8nio/n8n:latest

# 設定工作目錄，這有助於確保 n8n 命令在 PATH 中被找到
WORKDIR /usr/local/bin/n8n

# 複製 workflow 檔案
# Render 的建置上下文通常是儲存庫根目錄，所以直接引用檔案名稱
COPY n8n_flower_order_system_wf.json /files/n8n_flower_order_system_wf.json

# 複製並設定 entrypoint.sh 的執行權限到 /usr/local/bin/
# 這是解決 'Operation not permitted' 錯誤的常見做法
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# 暴露 n8n 運行的端口
EXPOSE 5678

# 預設啟動腳本，使用 sh -c 包裹以確保腳本執行和日誌捕捉
ENTRYPOINT ["/bin/sh", "-c", "/usr/local/bin/entrypoint.sh"]
