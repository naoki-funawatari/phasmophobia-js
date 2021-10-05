# FROM ubuntu
# RUN apt update && \
#   apt install -y nodejs && \
#   apt install -y aptitude && \
#   aptitude install -y npm && \
#   npm install -g npm && \
#   npm install -g yarn
FROM node:lts
RUN npm install -g npm
