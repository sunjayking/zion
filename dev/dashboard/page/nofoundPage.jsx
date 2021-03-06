import React from 'react'
import { WarningMod } from '../module/warningMod'

//-- 404页面
class NofoundPage extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<WarningMod
				title = 'OOPS!404!'
				content = '没有这个页面，去首页看看吧！'
				link = '/'
				linkName = '<返回首页'
			/>
		)
		return null
	}
}

export { NofoundPage }