deploy:
	npm run build
	rsync dist/ -av --delete root@116.62.217.57:/var/www/html/blog