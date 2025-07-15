# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
