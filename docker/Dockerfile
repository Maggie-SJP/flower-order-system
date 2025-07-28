# 使用官方 n8n 映像
FROM n8nio/n8n:latest

# 將你預先定義好的 workflow 匯入檔案複製進 container
# 注意：Render 的建置上下文是 repo 根目錄
COPY n8n_flower_order_system_wf.json /files/n8n_flower_order_system_wf.json

# 指定 n8n 預設埠（可省略，僅作紀錄用途）
EXPOSE 5678

# 啟動時先匯入 workflow（會覆蓋已有的），再啟動 n8n
CMD ["sh", "-c", "n8n import:workflow --input /files/n8n_flower_order_system_wf.json --overwrite && n8n start"]
