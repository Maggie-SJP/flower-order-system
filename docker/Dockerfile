FROM n8nio/n8n:latest

# Optional: copy any custom scripts or config
# COPY ./entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# Copy your main n8n workflow file into the container
# Assuming your workflow file (e.g., n8n_flower_order_system_wf.json) is in the root of the repository
# and Dockerfile is in a subdirectory (e.g., 'docker/Dockerfile').
# Render's build context is usually the repository root when dockerfilePath is specified.
COPY n8n_flower_order_system_wf.json /files/n8n_flower_order_system_wf.json

# If needed: run custom entrypoint script
# ENTRYPOINT ["/entrypoint.sh"]

# Expose the port n8n runs on
EXPOSE 5678

# Command to run n8n
# Use the full path to n8n executable
# This will start n8n and automatically import the workflow on startup.
# Workflows and credentials will be managed via the UI and database.
CMD ["n8n", "start", "--workflow=/files/n8n_flower_order_system_wf.json"]
