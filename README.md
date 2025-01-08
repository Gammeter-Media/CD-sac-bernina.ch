# Corporate Design Manual für SAC Sektion Bernina
https://gammeter-media.github.io/CD-sac-bernina.ch/ 


## get up and running on a new machine
```bash
docker-compose up -d
# Restart
docker exec -it sacbernina_docusaurus npm run docusaurus clear && docker exec -it sacbernina_docusaurus npm run docusaurus start
```