set -e

rm -rf out

npx electron-forge make -p darwin -a x64
# npx electron-forge make -p darwin -a arm64

npx electron-forge make -p win32 -a x64
# npx electron-forge make -p win32 -a arm64

npx electron-forge make -p linux -a x64
# npx electron-forge make -p linux -a arm64

mkdir -p out/release

# cp out/make/deb/arm64/xiaojun_chat_0.1.5_arm64.deb out/release/xiaojun_chat_0.1.5_arm64.deb
cp out/make/deb/x64/xiaojun_chat_0.1.5_amd64.deb out/release/xiaojun_chat_0.1.5_amd64.deb

# cp 'out/make/squirrel.windows/arm64/xiaojun_chat-0.1.5 Setup.exe' out/release/xiaojun_chat_0.1.5_arm64_setup.exe
cp 'out/make/squirrel.windows/x64/xiaojun_chat-0.1.5 Setup.exe' out/release/xiaojun_chat_0.1.5_x64_setup.exe

# cp out/make/zip/linux/arm64/xiaojun_chat-linux-arm64-0.1.5.zip out/release/xiaojun_chat-linux-arm64-0.1.5.zip
cp out/make/zip/linux/x64/xiaojun_chat-linux-x64-0.1.5.zip out/release/xiaojun_chat-linux-x64-0.1.5.zip

# cp out/make/zip/win32/arm64/xiaojun_chat-win32-arm64-0.1.5.zip out/release/xiaojun_chat-win32-arm64-0.1.5.zip
cp out/make/zip/win32/x64/xiaojun_chat-win32-x64-0.1.5.zip out/release/xiaojun_chat-win32-x64-0.1.5.zip

# cp out/make/xiaojun_chat-0.1.5-arm64.dmg out/release/xiaojun_chat-0.1.5-arm64.dmg
cp out/make/xiaojun_chat-0.1.5-x64.dmg out/release/xiaojun_chat-0.1.5.dmg

# cp out/make/zip/darwin/arm64/xiaojun_chat-darwin-arm64-0.1.5.zip out/release/xiaojun_chat-darwin-arm64-0.1.5.zip
cp out/make/zip/darwin/x64/xiaojun_chat-darwin-x64-0.1.5.zip out/release/xiaojun_chat-darwin-0.1.5.zip
