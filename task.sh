while true; do
	read -p "Do you wish to run in watch mode? (y/n)" yn
    case $yn in
        [Yy]* ) webpack --watch --mode development; break;;
        [Nn]* ) webpack --mode development;break;;
        * ) echo "Please answer yes or no.";;
    esac
done
