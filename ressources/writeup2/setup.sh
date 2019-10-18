EXEC=`pwd`
if [ ! -d ~/goinfre/isoBoot2Root ]; then
	mkdir -p ~/goinfre/isoBoot2Root 
fi
cd ~/goinfre/isoBoot2Root 
cp ${EXEC}/* .
docker-compose up -d
