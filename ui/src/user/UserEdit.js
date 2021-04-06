import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextInput,
  BooleanInput,
  DateField,
  PasswordInput,
  Edit,
  required,
  email,
  SimpleForm,
  useTranslate,
  Toolbar,
  SaveButton,
  useLocale,
} from 'react-admin'
import { Title } from '../common'
import DeleteUserButton from './DeleteUserButton'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  hour12: true,
}

const UserTitle = ({ record }) => {
  const translate = useTranslate()
  const resourceName = translate('resources.user.name', { smart_count: 1 })

  return <Title subTitle={`${resourceName} ${record ? record.name : ''}`} />
}

const UserToolbar = (props) => (
  <Toolbar {...props} classes={useStyles()}>
    <SaveButton />
    <DeleteUserButton />
  </Toolbar>
)

const UserEdit = (props) => {
  const locale = useLocale()
  return (
    <Edit title={<UserTitle />} {...props}>
      <SimpleForm toolbar={<UserToolbar />} variant="outlined">
        <TextInput source="userName" validate={[required()]} />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="email" validate={[email()]} />
        <PasswordInput source="password" validate={[required()]} />
        <BooleanInput source="isAdmin" initialValue={false} />
        <DateField
          source="lastLoginAt"
          variant="body1"
          locales={locale}
          options={dateOptions}
          showTime
        />
        {/*<DateField source="lastAccessAt" showTime />*/}
        <DateField
          source="updatedAt"
          variant="body1"
          locales={locale}
          options={dateOptions}
          showTime
        />
        <DateField
          source="createdAt"
          variant="body1"
          locales={locale}
          options={dateOptions}
          showTime
        />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
