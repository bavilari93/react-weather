import React , {Component} from 'react'

class Search extends Component{
	render(){
		return(
			<div>
				<form className="search-form" onSubmit={this.props.handleSubmit}> 
					<input
						name='city'
						value={this.props.input}
						onChange={e=>this.props.handleChange(e)}
						placeholder="city"
					/>
					<button type='submit' value="submit">
						search
					</button>
				</form>
			</div>
		)
	}
}

export default Search;