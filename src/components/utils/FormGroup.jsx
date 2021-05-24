import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'

const FormGroup = ({type, id, className, name, label, required, options, onChange}) => {
	let inputElement = null;

	switch (type) {
		case ('textarea'):
			inputElement = <textarea rows="5" id={id} className={`form-control ${className}`} name={name} label={label} required={required} onChange={onChange} autoComplete="off" />
			break

		case ('select'):
			inputElement = 
				<select id={id} className={`form-control ${className}`} name={name} label={label} required={required} onChange={onChange} >
					<option value="0">Select</option>
					{options.map(value => 
						<option key={value.id} value={value.id}>{value.name}</option>
					)}
				</select>
			break
			
		default:
			inputElement = <input type={type} id={id} className={`form-control ${className}`} name={name} label={label} required={required} onChange={onChange} autoComplete="off" />
	}

	return (
		<div>
			<div className="form-group">
				<label htmlFor={_.replace(name, '_', ' ')} className="text-uppercase text-muted small"><b>{(label) ? label : _.replace(name, '_', ' ')} {(required) && <span className="text-danger">*</span>} </b></label>
				{inputElement}
			</div>
		</div>
	)
	
}

export default FormGroup

FormGroup.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	required: PropTypes.bool,
	options: PropTypes.array,
	onChange: PropTypes.func.isRequired
}

FormGroup.defaultValues = {
	type: 'text',
	required: false,
}