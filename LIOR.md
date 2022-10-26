        // const elements = this.state.clients.map(function (client) {
        //     return <li key={client.id}>{client.nom} <button>X</button></li>
        // })

        // precise que le this est bien l'objet App => solution pour eviter le bind
        // <button onClick={this.handleClick.bind(this)}>State</button>
        // devient => 
        ///        <button onClick={() => this.handleClick()}>State</button>
        // ci dessus la fonction handleClick() la fonction fléché ne perds pas le this 

##  HandleDelete 
fonction fléchée permet de parler avec le bon this, d'avoir le state
```
    handleDelete = (id) => {
        console.log(id)
    }
    {this.state.taches.map(tache => (
        <li key={tache.id}>
            {tache.nom} <button onClick={() => this.handleDelete(tache.id)}>X</button>
        </li>
    ))
```
onClick ci-dessus est une fonction fléchée, cela va permettre de passer en parametres l'id