FROM ubuntu 

RUN apt-get update && apt-get install wget squashfs-tools p7zip p7zip-full -y 

ADD ./start /usr/local/bin/start
RUN chmod +x /usr/local/bin/start

CMD start