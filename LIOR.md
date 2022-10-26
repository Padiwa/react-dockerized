        // const elements = this.state.clients.map(function (client) {
        //     return <li key={client.id}>{client.nom} <button>X</button></li>
        // })

        // precise que le this est bien l'objet App => solution pour eviter le bind
        // <button onClick={this.handleClick.bind(this)}>State</button>
        // devient => 
        ///        <button onClick={() => this.handleClick()}>State</button>
        // ci dessus la fonction handleClick() la fonction fléché ne perds pas le this 