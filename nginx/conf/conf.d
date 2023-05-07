server {
    listen 80;
    listen [::]:80;

    server_name digism.xyz www.digism.xyz;
    server_tokens off;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://digism.xyz$request_uri;
    }
}

server {
    listen 443 default_server ssl http2;
    listen [::]:443 ssl http2;

    server_name digism.xyz;

    ssl_certificate /etc/nginx/ssl/live/digism.xyz/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/live/digism.xyz/privkey.pem;

    location / {
        proxy_pass: http://digism.xyz;
    }
}