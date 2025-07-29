# 使用官方 n8n 映像
FROM n8nio/n8n:latest

# 複製 workflow 檔案
# Render 的建置上下文通常是儲存庫根目錄，所以直接引用檔案名稱
COPY n8n_flower_order_system_wf.json /files/n8n_flower_order_system_wf.json

# ✅ 改放到 /data （n8n 預設可寫資料夾）
COPY docker/entrypoint.sh /data/entrypoint.sh

# ✅ 在 Dockerfile 中修改權限（這樣在 Render 通常不會被擋）
#RUN chmod +x /data/entrypoint.sh

# ✅ 改成使用 sh 執行（避免需要執行權限）
CMD ["sh", "/data/entrypoint.sh"]

## 複製並設定 entrypoint.sh 的執行權限到 /usr/local/bin/
# 使用 --chmod=+x 在複製時直接設定執行權限，這是解決 'Operation not permitted' 錯誤的可靠做法
#USER root
#COPY --chmod=+x docker/entrypoint.sh /usr/local/bin/entrypoint.sh
#USER node

## 暴露 n8n 運行的端口
#EXPOSE 5678

## 預設啟動腳本，使用 sh -c 包裹以確保腳本執行和日誌捕捉
#ENTRYPOINT ["/bin/sh", "-c", "/usr/local/bin/entrypoint.sh"]
