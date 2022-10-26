up:
	docker-compose up --build

down:
	docker-compose down -v

purge:
	docker-compose down -v --remove-orphans --rmi local
