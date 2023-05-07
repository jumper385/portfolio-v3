server {
    listen 80;
    server_name digism.xyz;

    location / {
        return 301 https://$host$request_uri;
    }

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

}
server {
    listen 443 ssl;
    server_name digism.xyz;

    location / {
        proxy_pass http://digism.xyz; #for demo purposes
    }
}