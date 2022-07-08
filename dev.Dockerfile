FROM node:16-bullseye

ARG VSCODE_SCRIPTS_VERSION="v0.241.1"

RUN apt-get update && \
    wget "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/${VSCODE_SCRIPTS_VERSION}/script-library/common-debian.sh" && \
    chmod +x ./common-debian.sh && \
    ./common-debian.sh false node automatic automatic true false && \
    wget "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/${VSCODE_SCRIPTS_VERSION}/script-library/node-debian.sh" && \
    chmod +x ./node-debian.sh && \
    ./node-debian.sh /usr/local/share/nvm 16 node

USER node
