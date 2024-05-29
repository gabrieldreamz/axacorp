import React from 'react'
import Display from './Display'
import { taxStatement } from './taxStatement'

export default function TaxStatementComponent() {
  return (
    <Display tabsName='Tax Statement' displayList={taxStatement} />
  )
}