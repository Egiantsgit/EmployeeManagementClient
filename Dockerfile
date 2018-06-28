FROM nginx:1.13.3-alpine

## Remove default nginx website

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/default.conf /etc/nginx/conf.d/

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder

COPY /dist/vendor-sheet-management /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
