import { FC } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Column, Input, Row, Text } from '@/components'

import { UserProps } from '@/shared/interfaces/user'
import { credentialsSchema } from '@/shared/schemas/credentials'

import { theme } from '@/theme'
import { setUserLS } from '@/shared/helpers/user'

export const Login: FC = () => {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserProps>({
		resolver: zodResolver(credentialsSchema),
	})

	const handleLogin = (data: UserProps) => {
		setUserLS(data)
		router.push('/dashboard')
	}

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<Column
				height='100vh'
				backgroundColor={theme.colors.gray}
				justifyContent='center'
			>
				<Row
					m='0 auto'
					width='880px'
					height='504px'
					borderRadius='8px'
					backgroundColor={theme.colors.white.default}
					boxShadow={`4px 6px 30px ${theme.colors.white.dark}`}
				>
					<Column width='544px' justifyContent='center'>
						<form onSubmit={handleSubmit(handleLogin)}>
							<Column width='320px' m='0 auto'>
								<Text
									mb='32px'
									fontWeight='700'
									variant='medium'
									textAlign='center'
								>
									Entrar
								</Text>

								<Text variant='small' fontWeight='600'>
									E-mail*
								</Text>
								<Input
									placeholder='e-mail'
									height='48px'
									mt='8px'
									{...(!errors.email && { mb: '24px' })}
									{...register('email')}
								/>
								{errors.email && (
									<Text color='red' variant='small' mb='24px'>
										{errors.email.message}
									</Text>
								)}

								<Text variant='small' fontWeight='600'>
									Senha*
								</Text>
								<Input
									placeholder='senha'
									height='48px'
									mt='8px'
									{...register('password')}
								/>
								{errors.password && (
									<Text color='red' variant='small'>
										{errors.password.message}
									</Text>
								)}

								<Button width='207px' height='48px' m='32px auto 0'>
									Entrar
								</Button>
							</Column>
						</form>
					</Column>
					<Column
						width='336px'
						alignItems='center'
						justifyContent='center'
						color={theme.colors.white.default}
						backgroundColor={theme.colors.primary}
						borderTopRightRadius='8px'
						borderBottomRightRadius='8px'
					>
						<Text variant='medium' fontWeight='700' mb='4px'>
							Olá, tech solver!
						</Text>
						<Text>Você está no Boilerplate da Nav9</Text>
					</Column>
				</Row>
			</Column>
		</>
	)
}
