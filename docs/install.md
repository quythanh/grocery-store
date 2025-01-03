# Installation 🛠️

## Prerequisites

- [Docker Desktop for Mac](https://docs.docker.com/desktop/setup/install/mac-install/) (2.2.0.0 or later)
or [Docker for Linux](https://docs.docker.com/desktop/setup/install/linux/)
or [Docker for Windows](https://docs.docker.com/desktop/setup/install/windows-install/) (if you're using WSL2)
- `docker-compose` version 2 or later is required.
- [Git](https://git-scm.com/downloads)
- [Homebrew](https://brew.sh/)

## Backend

### Install Warden

Warden may be installed via Homebrew on both macOS and Linux hosts:

```bash
brew install wardenenv/warden/warden
warden svc up
```

### DNS Resolution

#### Linux / Windows (WSL2)

Add the following line to `/etc/hosts`.

```
127.0.0.1 app.grocery-store.test
```

**Note:** If you're using Windows with **WSL2**, you also need to add to `C:\Windows\System32\drivers\etc\hosts`


:::tip

For more information see the configuration page for [Automatic DNS Resolution](./configuration/auto-dns-resolv.md).

:::

### Setup Magento 2

1. Clone repository

```bash
git clone https://github.com/quythanh/grocery-store-backend
cd grocery-store-backend
```

2. Sign an SSL certificate:

```bash
warden sign-certificate grocery-store.test
```

3. Start the project environment:

```bash
warden env up
```

4. Drop into a shell within the project environment:

```bash
warden shell
```

5. Create an access key [here](https://commercemarketplace.adobe.com/customer/accessKeys/) and Configure global Magento Marketplace credentials:

```bash
composer global config http-basic.repo.magento.com <username> <password>
```

:::info NOTE

Use the **Public key** as your `<username>` and the **Private key** as your `<password>`

:::

6. Install libraries

```bash
composer install
```

7. Install the application:

```bash
## Install Application
bin/magento setup:install \
    --backend-frontname=backend \
    --amqp-host=rabbitmq \
    --amqp-port=5672 \
    --amqp-user=guest \
    --amqp-password=guest \
    --db-host=db \
    --db-name=magento \
    --db-user=magento \
    --db-password=magento \
    --search-engine=opensearch \
    --opensearch-host=opensearch \
    --opensearch-port=9200 \
    --opensearch-index-prefix=magento2 \
    --opensearch-enable-auth=0 \
    --opensearch-timeout=15 \
    --http-cache-hosts=varnish:80 \
    --session-save=redis \
    --session-save-redis-host=redis \
    --session-save-redis-port=6379 \
    --session-save-redis-db=2 \
    --session-save-redis-max-concurrency=20 \
    --cache-backend=redis \
    --cache-backend-redis-server=redis \
    --cache-backend-redis-db=0 \
    --cache-backend-redis-port=6379 \
    --page-cache=redis \
    --page-cache-redis-server=redis \
    --page-cache-redis-db=1 \
    --page-cache-redis-port=6379

## Configure Application
bin/magento config:set --lock-env web/unsecure/base_url \
    "https://${TRAEFIK_SUBDOMAIN}.${TRAEFIK_DOMAIN}/"

bin/magento config:set --lock-env web/secure/base_url \
    "https://${TRAEFIK_SUBDOMAIN}.${TRAEFIK_DOMAIN}/"

bin/magento config:set --lock-env web/secure/offloader_header X-Forwarded-Proto

bin/magento config:set --lock-env web/secure/use_in_frontend 1
bin/magento config:set --lock-env web/secure/use_in_adminhtml 1
bin/magento config:set --lock-env web/seo/use_rewrites 1

bin/magento config:set --lock-env system/full_page_cache/caching_application 2
bin/magento config:set --lock-env system/full_page_cache/ttl 604800

bin/magento config:set --lock-env catalog/search/enable_eav_indexer 1

bin/magento config:set --lock-env dev/static/sign 0

bin/magento deploy:mode:set -s developer
bin/magento cache:disable block_html full_page

bin/magento indexer:reindex
bin/magento cache:flush
```

8. Generate an admin user

```bash
ADMIN_PASS="$(pwgen -n1 16)"
ADMIN_USER=localadmin

bin/magento admin:user:create \
    --admin-password="${ADMIN_PASS}" \
    --admin-user="${ADMIN_USER}" \
    --admin-firstname="Local" \
    --admin-lastname="Admin" \
    --admin-email="${ADMIN_USER}@example.com"
printf "u: %s\np: %s\n" "${ADMIN_USER}" "${ADMIN_PASS}"
```

9. Disable 2FA

```bash
bin/magento module:disable -f Magento_TwoFactorAuth Magento_AdminAdobeImsTwoFactorAuth
```

10. Launch the application in your browser:

- [https://app.grocery-store.test/](https://app.grocery-store.test/)
- [https://app.grocery-store.test/backend/](https://app.grocery-store.test/backend/)

## Frontend

### Install Expo Go

You'll need to install [Expo Go](https://expo.dev/go) on your mobile device to launch application.


### Setup React Native

1. Clone Repository:

```bash
git clone https://github.com/quythanh/grocery-store-frontend
```


2. Install dependencies:

```bash
npm install
```

3. Create `.env` file

```js title=".env"
EXPO_PUBLIC_API_URL="https://magento.quythanh.tk"
```

4. Start project:

```bash
npm start
```

5. Use your phone to scan the QR code shown on the terminal.
