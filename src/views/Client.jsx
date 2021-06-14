import React, { Component } from 'react'

import './styles.css'

class Client extends Component {
	render () {
		return (
			<div id="clients" className="content bg-section-2">
				<div className="container">
					<h3 className="text-center">Our Clients</h3>
					<hr className="underline" />
					<br/>
					<div id="images" className="row">
						<div className="col-4 col-md-2"><img src='./logo/amman_mineral_logo.png' alt="PT. Amman Mineral Nusa Tenggara" title="PT. Amman Mineral Nusa Tenggara" /></div>
						<div className="col-4 col-md-2"><img src='./logo/bpjs_logo.png' alt="BPJS Kesehatan" title="BPJS Kesehatan"/></div>
						<div className="col-4 col-md-2"><img src='./logo/bpk_logo.png' alt="Badan Pemeriksa Keuangan" title="Badan Pemeriksa Keuangan"/></div>
						<div className="col-4 col-md-2"><img src='./logo/braincode_logo.png' alt="Brain Code" title="Brain Code"/></div>
						<div className="col-4 col-md-2"><img src='./logo/bri_logo.png' alt="Bank BRI" title="Bank BRI"/></div>
						<div className="col-4 col-md-2"><img src='./logo/btpn_logo.png' alt="Bank BPTN" title="Bank BPTN"/></div>
						<div className="col-4 col-md-2"><img src='./logo/indokordsa_logo.png' alt="Indo Kordsa" title="Indo Kordsa"/></div>
						<div className="col-4 col-md-2"><img src='./logo/kemdiknas_logo.png' alt="Kementrian Pendidikan Nasional" title="Kementrian Pendidikan Nasional"/></div>
						<div className="col-4 col-md-2"><img src='./logo/mandiri_logo.png' alt="Bank Mandiri" title="Bank Mandiri"/></div>
						<div className="col-4 col-md-2"><img src='./logo/pertamina_logo.png' alt="Pertamina" title="Pertamina"/></div>
						<div className="col-4 col-md-2"><img src='./logo/rs_indramayu_logo.png' alt="RS Indramayu" title="RS Indramayu"/></div>
						<div className="col-4 col-md-2"><img src='./logo/siloam_logo.png' alt="Siloam" title="Siloam"/></div>
						<div className="col-4 col-md-2"><img src='./logo/toyota_logo.png' alt="Toyota" title="Toyota"/></div>
						<div className="col-4 col-md-2"><img src='./logo/tugu_logo.png' alt="PT. Asuransi Tugu Pratama" title="PT. Asuransi Tugu Pratama"/></div>
						<div className="col-4 col-md-2"><img src='./logo/utpe_logo.png' alt="PT. United Tractors Pandu Engineering" title="PT. United Tractors Pandu Engineering"/></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Client;