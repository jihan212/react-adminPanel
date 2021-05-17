import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title="Edit the Post" {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput lebel="Published" source='publishedAt' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit
