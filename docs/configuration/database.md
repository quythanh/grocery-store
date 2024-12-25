# Database

## Database Connection

### Common Settings

| Name | Value/Description |
| --- | --- |
| MySQL Host | `grocery-store-db-1` |
| MySQL Port | `3306` |
| MySQL User | `magento` |
| MySQL Password | `magento` |
| MySQL Database | `magento` |
| SSH Host, Proxy Host, Server | `tunnel.warden.test` |
| SSH Host Port | `2222` |
| SSH User | `user` |
| SSH private key file | `~/.warden/tunnel/ssh_key` |

### MySQL Workbench

![MySQL Workbench Setup Connection Image](/img/db-connect-mysql-workbench.png)

## Dump

### Import Database

```bash
pv grocery-store.sql.gz | gunzip -c | warden db import
```

:::tip
If you don't have `pv` installed, use `cat` instead.

```bash
cat grocery-store.sql.gz | gunzip -c | warden db import
```

:::

### Export Database

1. Connect to Database host in Docker:

```bash
docker exec -it grocery-store-db-1 bash
```

2. Export data and compress it to `.gz`

```bash
mysqldump -u magento -p magento | gzip > grocery-store.sql.gz
```

3. Exit Docker Container

```bash
exit
```

4. Copy data file from Docker Container to Host

```bash
docker cp grocery-store-db-1:/grocery-store.sql.gz .
```
