# Automatic DNS Resolution

## MacOS

On Mac OS, DNS resolution is configured automatically for `*.test` domains
using a feature Mac OS inherits from BSD. When `warden install` is run (or
`warden svc up` for the first time) the following contents are placed in
the `/etc/resolver/test` file. This has the effect of having zero impact
on DNS queries except for those under the `.test` TLD.

```bash
nameserver 127.0.0.1
```

## Linux (systemd-resolved)

This approach works on most modern (systemd based) operating systems.

`systemd-resolved` can be configured to forward the requests of `.test` TLD
to another DNS server. The configuration file is typically located at
`/etc/systemd/resolved.conf` and `/etc/systemd/resolved.conf.d/*.conf`.
Run the following commands to configure systemd-resolved:

```bash
sudo mkdir -p /etc/systemd/resolved.conf.d
echo -e "[Resolve]\nDNS=127.0.0.1\nDomains=~test\n" \
  | sudo tee /etc/systemd/resolved.conf.d/warden.conf > /dev/null
sudo systemctl restart systemd-resolved
```
