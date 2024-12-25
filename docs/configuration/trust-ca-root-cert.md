# Trusted CA Root Certificate

In order to sign SSL certificates that may be trusted by a developer workstation, Warden uses a CA root certificate with CN equal to `Warden Proxy Local CA (<hostname>)` where `<hostname>` is the hostname of the machine the certificate was generated on at the time Warden was first installed. The CA root can be found at `~/.warden/ssl/rootca/certs/ca.cert.pem`.

On **MacOS** this root CA certificate is automatically added to a users trust settings as can be seen by searching for ‘Warden Proxy Local CA’ in the Keychain application. This should result in the certificates signed by Warden being trusted by Safari and Chrome automatically. If you use Firefox, you will need to add this CA root to trust settings specific to the Firefox browser per the below.

On **Ubuntu/Debian** this CA root is copied into `/usr/local/share/ca-certificates` and on **Fedora/CentOS (Enterprise Linux)** it is copied into `/etc/pki/ca-trust/source/anchors` and then the trust bundle is updated appropriately. For new systems, this typically is all that is needed for the CA root to be trusted on the default Firefox browser, but it may not be trusted by Chrome or Firefox automatically should the browsers have already been launched prior to the installation of Warden (browsers on Linux may and do cache CA bundles)

:::info Note

If you are using **Firefox** and it warns you the SSL certificate is invalid/untrusted, go to Preferences -> Privacy & Security -> View Certificates (bottom of page) -> Authorities -> Import and select `~/.warden/ssl/rootca/certs/ca.cert.pem` for import, then reload the page.

If you are using **Chrome** on **Linux** and it warns you the SSL certificate is invalid/untrusted, go to Chrome Settings -> Privacy And Security -> Manage Certificates (see more) -> Authorities -> Import and select `~/.warden/ssl/rootca/certs/ca.cert.pem` for import, then reload the page.

:::
