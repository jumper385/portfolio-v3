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

    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    ssl_certificate /etc/letsencrypt/live/digism.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/digism.xyz/privkey.pem;

    location / {
        proxy_pass http://digism.xyz; #for demo purposes
    }
}