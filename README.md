# npm-shell-demo

a demo for npm shell

```
# 1 install packages
npm install
# 2 link shell
npm link
```

### start by npm init

```
npm init
```

### demo commands

```
# install qr
demo_shell qr
```

```
# get qrcode by String
demo_shell getqr [String]
```

```
# remove qrcode tools in global
demo_shell remove
```

### demo code

./bin/shell.js

### important

add follows to tell system to use node to execute

```
#!/usr/bin/env node
```