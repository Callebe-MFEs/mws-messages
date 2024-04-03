FROM nginx:1.23.3-alpine as build

LABEL name="mws-messages" \
      description="My Workspace Messages Micro-Frontend application using React + Vite, module federation and Single-SPA"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "mws-messages: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./dist .

USER nginx
