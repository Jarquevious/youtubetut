import { Card, CardContent, Typography } from '@material-ui/core';
import react from 'react';
import { Form, Formik, Field } from 'formik';
import { InvestmentDetials } from './InvestmentDetails';


const initialValues: InvestmentDetails = {
    fullName: '',
    initialInvestment: undefined,
    investmentRisk: [],
    commentAboutInvestmentRisk: '',
    dependents: -1,
    acceptedTermsAndConditions: false
};

export function FormDemo() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4"> New Account</Typography>
                    
                    <Formik initialValues={initialValues} onSubmit={() => {}}>
                        {({ values })} => (
                            <Form>
                                <Field name="fullName" />
                                <Field name="initialInvestment" type='number' />
                                
                                <Field name="investmentRisk" value="High" type="checkbox" />
                                <Field name="investmentRisk" value="Medium" type="checkbox" />
                                <Field name="investmentRisk" value="Low" type="checkbox" />

                                <Field name="commentAboutInvestmentRisk" as="textarea" />

                                <Field name="commentAboutInvestmentRisk" as="select" />
                                <option value={0}>0</option>

                                <pre>{JSON.stringify(values, null, 4)}</pre>
                            </Form>    
                        )}
                    </Formik>
            </CardContent>
        </Card>
    );
}

export default FormDemo