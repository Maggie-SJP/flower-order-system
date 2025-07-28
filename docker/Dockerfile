# 使用官方 n8n 映像
FROM n8nio/n8n:latest

# 複製 workflow 檔案與啟動腳本
COPY n8n_flower_order_system_wf.json /files/n8n_flower_order_system_wf.json
COPY docker/entrypoint.sh /entrypoint.sh

# 👉 用 Dockerfile 設定執行權限
RUN chmod +x /entrypoint.sh

# 預設啟動
ENTRYPOINT ["/entrypoint.sh"]
