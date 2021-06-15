import React from 'react'
import PropTypes from 'prop-types'

import { ROOT_URL } from '../../commons/config'

export default function Project ({ align, logo, img, company, title, description, sector }) {
    return (
        <div className="mb-5">
            <div className="row">
                <div className={`col-md-6 ${align === 'right' && 'order-md-1'}`}>
                    <img src={`${ROOT_URL}/img/${img}.jpg`} alt={img} width="100%" height="300px" /> <br /><br />
                </div>
                <div className={`col-md-6 ${align === 'right' && 'order-md-0'}`}>
                    <img src={`${ROOT_URL}/logo/${logo}.png`} alt="logo" height="50px" />
                    <h4 className="mt-2 font-weight-bold">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    align: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sector: PropTypes.string
}

Project.defaultProps = {
    align: 'left'
}