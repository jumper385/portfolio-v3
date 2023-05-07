server {
    listen 80;
    listen [::]:80;

    server_name digism.xyz www.digism.xyz;
    server_tokens off;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://example.org$request_uri;
    }
}