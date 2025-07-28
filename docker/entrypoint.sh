#!/bin/sh

# 匯入 workflow（會覆蓋同名的現有 workflow）
echo "📥 Importing workflow..."
n8n import:workflow --input /files/n8n_flower_order_system_wf.json --overwrite

# 啟動 n8n
echo "🚀 Starting n8n..."
exec n8n start
