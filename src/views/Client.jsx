import React, { Component } from 'react'

import './styles.css'

import AmmanMineralLogo from './../assets/amman_mineral_logo.png';
import BPJSLogo from './../assets/bpjs_logo.png';
import BPKLogo from './../assets/bpk_logo.png';
import BrainCodeLogo from './../assets/braincode_logo.png';
import BRILogo from './../assets/bri_logo.png';
import BTPNLogo from './../assets/btpn_logo.png';
import IndoKordsaLogo from './../assets/indokordsa_logo.png';
import KemdiknasLogo from './../assets/kemdiknas_logo.png';
import MandiriLogo from './../assets/mandiri_logo.png';
import PertaminaLogo from './../assets/pertamina_logo.png';
import RSIndramayuLogo from './../assets/rs_indramayu_logo.png';
import SiloamLogo from './../assets/siloam_logo.png';
import ToyotaLogo from './../assets/toyota_logo.png';
import TuguLogo from './../assets/tugu_logo.png';
import UTPELogo from './../assets/utpe_logo.png';

class Client extends Component {
	render () {
		return (
			<div id="clients" className="content bg-section-2">
				<div className="container">
					<h3 className="text-center">Our Clients</h3>
					<hr className="underline" />
					<br/>
					<div id="images" className="row">
						<div className="col-4 col-md-2"><img src={AmmanMineralLogo} alt="PT. Amman Mineral Nusa Tenggara" title="PT. Amman Mineral Nusa Tenggara" /></div>
						<div className="col-4 col-md-2"><img src={BPJSLogo} alt="BPJS Kesehatan" title="BPJS Kesehatan"/></div>
						<div className="col-4 col-md-2"><img src={BPKLogo} alt="Badan Pemeriksa Keuangan" title="Badan Pemeriksa Keuangan"/></div>
						<div className="col-4 col-md-2"><img src={BrainCodeLogo} alt="Brain Code" title="Brain Code"/></div>
						<div className="col-4 col-md-2"><img src={BRILogo} alt="Bank BRI" title="Bank BRI"/></div>
						<div className="col-4 col-md-2"><img src={BTPNLogo} alt="Bank BPTN" title="Bank BPTN"/></div>
						<div className="col-4 col-md-2"><img src={IndoKordsaLogo} alt="Indo Kordsa" title="Indo Kordsa"/></div>
						<div className="col-4 col-md-2"><img src={KemdiknasLogo} alt="Kementrian Pendidikan Nasional" title="Kementrian Pendidikan Nasional"/></div>
						<div className="col-4 col-md-2"><img src={MandiriLogo} alt="Bank Mandiri" title="Bank Mandiri"/></div>
						<div className="col-4 col-md-2"><img src={PertaminaLogo} alt="Pertamina" title="Pertamina"/></div>
						<div className="col-4 col-md-2"><img src={RSIndramayuLogo} alt="RS Indramayu" title="RS Indramayu"/></div>
						<div className="col-4 col-md-2"><img src={SiloamLogo} alt="Siloam" title="Siloam"/></div>
						<div className="col-4 col-md-2"><img src={ToyotaLogo} alt="Toyota" title="Toyota"/></div>
						<div className="col-4 col-md-2"><img src={TuguLogo} alt="PT. Asuransi Tugu Pratama" title="PT. Asuransi Tugu Pratama"/></div>
						<div className="col-4 col-md-2"><img src={UTPELogo} alt="PT. United Tractors Pandu Engineering" title="PT. United Tractors Pandu Engineering"/></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Client;