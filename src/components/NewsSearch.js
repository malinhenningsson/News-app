import React from 'react';

const NewsSearch = () => {
    return (
        <div>
            <h1>Search</h1>

            <form onSubmit={() => {}}>
				<div className="input-group">
					<input
						onChange={() => {}}
						type="text"
						className="form-control"
						placeholder="Search for a specific topic"
					/>

					<button type="submit" className="btn btn-success">Search</button>
				</div>
			</form>
        </div>
    );
}
 
export default NewsSearch;