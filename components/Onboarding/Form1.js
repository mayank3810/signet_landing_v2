import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Form1({ setStage, setOrganizationId }) {
	const [email, setEmail] = useState({ data: '', error: false });
	const [name, setName] = useState({ data: '', error: false });
	const [company, setCompany] = useState({ data: '', error: false });
	const [contact, setContact] = useState({ data: '', error: false });

	const [loading, setLoading] = useState(false);
	const [apiResp, setApiResp] = useState('');

	const [plan, setPlan] = useState('');

	const router = useRouter();

	useEffect(() => {
		const _plan = localStorage.getItem('planName') || 'Enterprise';
		setPlan(_plan);
		if (!_plan || _plan === '') {
			alert('No Plan has been selected. Please select a plan');
			setTimeout(() => {
				router.push('/pricing');
			}, 500);
		}
	}, []);

	const createOrganization = async (e) => {
		e.preventDefault();
		if (!plan || plan === '') {
			alert('No Plan has been selected. Please select a plan');
			setTimeout(() => {
				router.push('/pricing');
			}, 500);
		}
		if (name.data === '') {
			setName({ data: '', error: true });
		}
		if (email.data === '') {
			setEmail({ data: '', error: true });
		}
		if (contact.data === '') {
			setContact({ data: '', error: true });
		}
		if (company.data === '') {
			setCompany({ data: '', error: true });
		}
		if (name.data != '' && email.data != '' && contact.data != '' && company.data != '') {
			// console.log({
			//   email: email.data,
			//   name: name.data,
			//   companyName: company.data,
			//   phone: contact.data,
			// });
			setLoading(true);
			const rawResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + 'organization/createOrganization', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					planName: plan,
					billingEmail: email.data,
					name: name.data,
					companyName: company.data,
					phone: contact.data,
				}),
			});
			if (rawResponse.ok) {
				const content = await rawResponse.json();
				setLoading(false);
				setApiResp('You have signed up successfully. Thank you.');
				localStorage.setItem('organizationId', content?.data?.organization._id);
				setOrganizationId(content?.data?.organization._id);
				setTimeout(() => {
					setStage(2);
				}, 300);
				console.log(content);
				setName({ data: '', error: false });
				setEmail({ data: '', error: false });
				setCompany({ data: '', error: false });
				setContact({ data: '', error: false });
				localStorage.removeItem('planName');
			} else {
				setApiResp('An error occurred. Please retry.');
				setLoading(false);
			}
		}
	};
	return (
		<>

			<form className="row">
				<div className="col-md-12">
					<div className="register-form-title text-center">
						<h4 className="h4-lg">Create your account</h4>
						<p className="p-xl">
							Free for upto 1000 tag scans per month.
						</p>
					</div>
				</div>

				<div className="col-md-12 ">
					<div className="row">
						<div className="col-12">
							<input
								className="form-control text"
								type="text"
								placeholder="Your name"
								value={name.data ?? ''}
								onChange={(e) => setName({ data: e.target.value, error: false })}
							/>
							{name.error && (
								<span className="error text-red" htmlFor="name">
									Required
								</span>
							)}
						</div>
						<div className="col-12 mt-4">
							<input
								className="form-control text"
								type="text"
								placeholder="Company name"
								value={company.data ?? ''}
								onChange={(e) => setCompany({ data: e.target.value, error: false })}
							/>
							{company.error && <span className="error text-red">Required</span>}
						</div>
						<div className="col-12 mt-4">
							<input
								className="form-control email"
								type="email"
								placeholder="Business email"
								value={email.data ?? ''}
								onChange={(e) => setEmail({ data: e.target.value, error: false })}
							/>
							{email.error && <span className="error text-red">Required</span>}
						</div>
						<div className="col-12 mt-4">
							<input
								className="form-control"
								type="text"
								placeholder="Phone number"
								value={contact.data ?? ''}
								onChange={(e) => setContact({ data: e.target.value, error: false })}
							/>
							{contact.error && <span className="error text-red">Required</span>}
						</div>

						{/* Form Submit Button */}
						<div className="col-md-12 mt-4">
							<div className="col-md-12 form-btn text-right">
								{apiResp && <span className={apiResp.includes('error') ? 'orange-red-color' : 'green-color'}>{apiResp}</span>}
								<button onClick={createOrganization} className="btn btn-outline btn-yellow tra-yellow-hover submit">
									{loading ? 'Submitting' : 'Start Free Trial'}
								</button>
							</div>
						</div>

					</div>
				</div>


			</form>
		</>

	);
}

export default Form1;
