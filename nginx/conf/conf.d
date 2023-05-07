server {
    listen 80;
    listen [::]:80;

    server_name digism.xyz www.digism.xyz;
    server_tokens off;

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 default_server ssl http2;
    listen [::]:443 ssl http2;

    server_name digism.xyz;

    ssl_certificate /etc/nginx/ssl/live/digism.xyz/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/live/digism.xyz/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass: http://digism.xyz;
    }
}