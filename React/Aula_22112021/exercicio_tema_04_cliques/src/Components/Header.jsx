import { Component } from 'react';  
import PropTypes from 'prop-types';  
  
const estilo = {  
    color: 'violet',  
    borderBottom: 'blue solid 2px',  
    backgroundColor: 'green',  
};  
  
	export class Header extends Component {  
	    render() {  
	        return (  
	            <section>  
	                <h2 style={estilo}>Olá, {this.props.nome}, seja bem-vindo!</h2>
                    <footer>Este é o exercicio de Contagem de cliques</footer> 
	            </section>  
	        );  
	    }  
	}  
	  
	Header.defaultProps = {  
	    nome: 'Jordana',  
	};  
	  
	Header.propTypes = {  
	    nome: PropTypes.string,  
	};  
    	export default Header;