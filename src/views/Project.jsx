import React, { Component } from 'react'
import _ from 'lodash'

import ProjectComponent from './../components/project/Index'

const sector = [
	{ id: 1, name: 'Engineering' },
	{ id: 2, name: 'FSI' },
	{ id: 3, name: 'Health Care' },
	{ id: 4, name: 'Insurance' },
	{ id: 5, name: 'Manufacturing' },
	{ id: 6, name: 'Oil and Gas' },
	{ id: 7, name: 'Retail' }
]

const projects = [
	{
		company: 'bpjs',
		logo: 'bpjs_logo',
		img: 'analytic',
		title: 'Enterprise Data Warehouse: Analytics',
		description: 'Development of fraud and churn model using Microsoft R Server with deployment on SQL Server',
		sector: 4
	},
	{
		company: 'tam',
		logo: 'tam',
		img: 'forecast',
		title: 'Forecasting Analysis',
		description: 'Development of forecasting system using regression with combination of Azure Machine Learning Studio & custom Python script',
		sector: 5
	},
	{
		company: '',
		logo: 'credit_score',
		img: 'analysis',
		title: 'Credit Scoring Analysis: Default Payment Prediction',
		description: 'Development machine learning model for credit scoring that classify between good and bad debtor. Model development using R',
		sector: 2
	},
	{
		company: '',
		logo: 'myocardial',
		img: 'analysis2',
		title: 'Myocardial Infarction',
		description: 'Development of machine learning model that predict lethal outcome (survive or not) of Myocardial Infarction. Model development using R',
		sector: 3
	},
	{
		company: 'bri',
		logo: 'bri_logo',
		img: 'dwh',
		title: 'Enterprise DWH',
		description: '',
		sector: 2
	},
	{
		company: 'btpns',
		logo: 'btpn_logo',
		img: 'design',
		title: 'SSIS Autodebet Wow',
		description: '',
		sector: 2
	},
	{
		company: 'pertamina',
		img: 'dashboard',
		logo: 'pertamina_logo',
		title: 'Dashboard',
		description: '',
		sector: 6
	},
	{
		company: 'indokordsa',
		img: 'dashboard2',
		logo: 'indokordsa_logo',
		title: 'Dashboard',
		description: '',
		sector: 5
	},
	{
		company: 'superindo',
		img: 'dashboard3',
		logo: 'bpjs_logo',
		title: 'Dashboard',
		description: '',
		sector: 7
	},
	{
		company: 'siloam',
		logo: 'siloam_logo',
		img: 'design2',
		title: 'SQL PTO',
		description: '',
		sector: 3
	},
	{
		company: 'tugu',
		logo: 'tugu_logo',
		img: 'discuss',
		title: 'IDEARA SQL Monitoring',
		description: '',
		sector: 4
	},
	{
		company: 'bpjs',
		logo: 'bpjs_logo',
		img: 'manage_service',
		title: 'Manage Service',
		description: '',
		sector: 4
	},
	{
		company: 'utpe',
		logo: 'utpe_logo',
		img: 'machine_learning',
		title: 'MS Machine Learning',
		description: '',
		sector: 1
	}
]

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSectorActive: 0,
			isActive: 0,
			projectList: _.sortBy(projects, ['company', 'asc'])
		}
	}

	handleActiveSector = (sector) => {
		this.setState({ isSectorActive: sector })
		this.handleActive(0)
	}

	handleActive = (sector) => {
		let filteredProject = projects
		if (sector !== 0) {
			filteredProject = _.filter(projects, ['sector', sector])
		}
		this.setState({ isActive: sector, projectList: filteredProject })
	}

	render () {
		const { isSectorActive, isActive, projectList } = this.state

		return (
			<div id="projects" className="content min-vh-100 bg-section-2">
				<div className="container">
					<h3 className="text-center">Our Projects</h3>
					<hr className="underline" />
					<br/>
					<div className="row">
						<div className="col">
							<div className="btn-group btn-group-sm">
								<button type="button" className={`btn rounded-0 ${(isSectorActive === 0) && 'btn-theme'}`} onClick={() => this.handleActiveSector(0)}>All Sector</button>
								<button type="button" className={`btn btn-sm ${(isSectorActive === 1) && 'btn-theme'}`} onClick={() => this.handleActiveSector(1)}>Industry Sector</button>
							</div>
						</div>
					</div>
					<div className="row mt-2 d-none d-md-block">
						<div className="col-md-12">
							<div className="btn-group btn-group-sm">
								<button type="button" className={`btn rounded-0 ${(isActive === 0) && 'btn-theme'}`} onClick={() => this.handleActive(0)}>All</button>
								<button type="button" className={`btn btn-sm ${(isActive === 1) && 'btn-theme'}`} onClick={() => this.handleActive(1)}>Engineering</button>
								<button type="button" className={`btn btn-sm ${(isActive === 2) && 'btn-theme'}`} onClick={() => this.handleActive(2)}>FSI</button>
								<button type="button" className={`btn btn-sm ${(isActive === 3) && 'btn-theme'}`} onClick={() => this.handleActive(3)}>Health Care</button>
								<button type="button" className={`btn btn-sm ${(isActive === 4) && 'btn-theme'}`} onClick={() => this.handleActive(4)}>Insurance</button>
								<button type="button" className={`btn btn-sm ${(isActive === 5) && 'btn-theme'}`} onClick={() => this.handleActive(5)}>Manufacturing</button>
								<button type="button" className={`btn btn-sm ${(isActive === 6) && 'btn-theme'}`} onClick={() => this.handleActive(6)}>Oil and Gas</button>
								<button type="button" className={`btn btn-sm rounded-0 ${(isActive === 7) && 'btn-theme'}`} onClick={() => this.handleActive(7)}>Retail</button>
							</div>
						</div>
					</div>
					<br/><br/>

					<div className="row">
						{projectList.map((values, key) => 
							<div className="col-12">
								<ProjectComponent key={key} align={(key % 2 === 0) ? 'left' : 'right'} img={values.img} logo={values.logo} title={values.title} description={values.description} />
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}