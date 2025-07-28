#!/bin/sh

# 匯入 workflow（如果資料庫內還沒有）
n8n import:workflow --input /files/n8n_flower_order_system_wf.json --overwrite=true

# 啟動 n8n
n8n start
