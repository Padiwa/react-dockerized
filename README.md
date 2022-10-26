## Ajout .babelrc pour corriger : 
```
#0 4.249 Module build failed (from ./node_modules/babel-loader/lib/index.js):
#0 4.249 SyntaxError: /app/src/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (7:13):
#0 4.249 
#0 4.249   5 | const container = document.getElementById("root");
#0 4.249   6 | const root = createRoot(container);
#0 4.249 > 7 | root.render(<Hello />);
#0 4.249     |             ^
#0 4.249   8 |

```



## Taille image : 
```
react-dockerized-react              latest                         40e7431e25a4   4 days ago      22.8MB
```


### Pour image de dev : 
1. Build the Docker image for the current folder and tag it with `dockerized-react`
`docker build . -t dockerized-react`

####  Check the image was created
`docker images | grep dockerized-react`

#### Run the image in detached mode and map port 3000 inside the container with 3000 on current host
`docker run -p 3000:3000 -d dockerized-react`

#### Pour rentrer dans le container : 
docker exec -it dockerized-react


## Mantine
```
npm install @mantine/core @mantine/hooks @mantine/form @mantine/dropzone @mantine/modals @mantine/dates dayjs @mantine/notification
```

