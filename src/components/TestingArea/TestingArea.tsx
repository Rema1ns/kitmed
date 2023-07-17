import React, { useState } from 'react';

import { LoaderStyled } from '../Loader/LoaderStyled';
import {
  deleteCategory, getCategory, postCategory, putCategory
} from '../../services/apis/api';
import { initialPostValue } from '../../constants/constants';

import {
  BtnCancelStyled,
  BtnClearStyled,
  BtnExecuteStyled,
  BtnGroupStyled,
  BtnTryOutStyled, FlexStyled, H4Styled,
  HeadersParameterDescriptionStyled,
  HeadersParameterNameStyled, MicrolightStyled,
  ParameterInputStyled,
  ParameterInStyled, ParameterNameStyled,
  ParametersAreaStyled, ParametersTitleStyled,
  ParameterTextStyled, ParameterTypeStyled,
  ResponseDescriptionStyled,
  ResponseInerStyled, ResponsesNameStyled,
  TableContainerStyled, TbodyStyled,
  TestingAreaSizeStyled, TextAreaStyled, TheadStyled
} from './TestingAreaStyled';

interface Iprops {
  child: string
}

interface IResponse {
  data?: any,
  config?: any,
  response?: any,
}

interface EventTarget {
  value: string;
}

const TestingArea = ({ child }: Iprops) => {
  const [isTest, setIsTest] = useState(false);
  const [isExecute, setIsExecute] = useState(false);
  const [value, setValue] = useState('');
  const [postValue, setPostValue] = useState(initialPostValue);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

  const valueChange = (event: React.ChangeEvent<EventTarget>) => {
    child === 'GET' && setValue(event.target.value);
    child === 'DELETE' && setValue(event.target.value);
    child === 'POST' && setPostValue(event.target.value);
    child === 'PUT' && setPostValue(event.target.value);
  };

  async function fetching(params: string) {
    setIsExecute(true);
    setIsLoading(true);
    try {
      let response = await getCategory(params)
        .then((res: IResponse) => {
          setData(res);
        });
      if (child === 'GET') {
        response = await getCategory(params)
          .then((res: IResponse) => {
            setData(res);
          });
      }
      if (child === 'POST') {
        response = await postCategory(params)
          .then((res: IResponse) => {
            setData(res);
          });
      }
      if (child === 'PUT') {
        response = await putCategory(params)
          .then((res: IResponse) => {
            setData(res);
          });
      }
      if (child === 'DELETE') {
        response = await deleteCategory(params)
          .then((res: IResponse) => {
            setData(res);
          });
      }
      setIsLoading(false);
      return response;
    } catch (err: any) {
      setData(err.response);
      setIsLoading(false);
    }
  }

  return (
    <TestingAreaSizeStyled props={child}>
      <ParametersAreaStyled>
        <ParameterTextStyled props={child}>
          Parameters
        </ParameterTextStyled>
        {isTest
          ? <BtnCancelStyled onClick={() => setIsTest(false)}>Cancel</BtnCancelStyled>
          : <BtnTryOutStyled onClick={() => setIsTest(true)}>Try it Out</BtnTryOutStyled>}
      </ParametersAreaStyled>
      <TableContainerStyled>
        <TheadStyled>
          <HeadersParameterNameStyled>
            name
          </HeadersParameterNameStyled>
          <HeadersParameterDescriptionStyled>
            description
          </HeadersParameterDescriptionStyled>
        </TheadStyled>
        {child === 'GET' && <TbodyStyled>
          <ParametersTitleStyled>
            <ParameterNameStyled>
              categoryType
            </ParameterNameStyled>
            <ParameterTypeStyled>
              string
            </ParameterTypeStyled>
            <ParameterInStyled>
              (querry)
            </ParameterInStyled>
          </ParametersTitleStyled>
          <ParameterInputStyled
            onChange={valueChange}
            readOnly={!isTest}
            props={isTest}
            value={value}
            placeholder="categoryType"
          />
        </TbodyStyled>}
        {child === 'POST'
          && <TextAreaStyled
            props={isTest}
            onChange={valueChange}
            value={postValue}
            readOnly={!isTest}
          />}
        {child === 'PUT' && <TextAreaStyled
          props={isTest}
          onChange={valueChange}
          value={postValue}
          readOnly={!isTest}
        />}
        {child === 'DELETE' && <TbodyStyled>
          <ParametersTitleStyled>
            <ParameterNameStyled>
              Id
            </ParameterNameStyled>
            <ParameterTypeStyled>
              integer
            </ParameterTypeStyled>
            <ParameterInStyled>
              (querry)
            </ParameterInStyled>
          </ParametersTitleStyled>
          <ParameterInputStyled
            onChange={valueChange}
            readOnly={!isTest}
            props={isTest}
            value={value}
            type="number"
            inputMode="numeric"
            placeholder="id"
          />
        </TbodyStyled>}
        {isTest && <BtnGroupStyled>
          <BtnExecuteStyled onClick={() => fetching(value)}>
            Execute
          </BtnExecuteStyled>
          {isExecute && <BtnClearStyled onClick={() => setIsExecute(false)}>
            Clear
          </BtnClearStyled>}
        </BtnGroupStyled>}
        {isLoading && <LoaderStyled />}
      </TableContainerStyled>
      <ParametersAreaStyled>
        <ResponsesNameStyled>Responses</ResponsesNameStyled>
      </ParametersAreaStyled>
      <ResponseInerStyled>
        {isExecute && !isLoading
          && <div>
            <H4Styled>Curl</H4Styled>
            <MicrolightStyled>
              <pre>
                  Curl -X {child}<br />
                {JSON.stringify(data.config.url)}<br />
                  -H `accept: */*`
              </pre>
            </MicrolightStyled>
            <H4Styled>Request URL</H4Styled>
            <MicrolightStyled>https://localhost:7029/api/Categories?categoryType={value}</MicrolightStyled>
            <H4Styled>Server response</H4Styled>
            <TheadStyled>
              <HeadersParameterNameStyled>
              Code
              </HeadersParameterNameStyled>
              <HeadersParameterDescriptionStyled>
              details
              </HeadersParameterDescriptionStyled>
            </TheadStyled>
            <FlexStyled>
              <ParameterNameStyled>
                {JSON.stringify(data.status)}
              </ParameterNameStyled>
              <div>
                <H4Styled>Response body</H4Styled>
                <MicrolightStyled>{JSON.stringify(data.data, null, 2)}</MicrolightStyled>
                <H4Styled>Response headers</H4Styled>
                <MicrolightStyled>{JSON.stringify(data.headers, null, 2)}</MicrolightStyled>
              </div>
            </FlexStyled>
          </div>}
        <div>
          <TheadStyled>
            <HeadersParameterNameStyled>
              Code
            </HeadersParameterNameStyled>
            <HeadersParameterDescriptionStyled>
              description
            </HeadersParameterDescriptionStyled>
          </TheadStyled>
        </div>
        <TbodyStyled>
          <ParametersTitleStyled>
            <ParameterNameStyled>
              200
            </ParameterNameStyled>
          </ParametersTitleStyled>
          <ResponseDescriptionStyled>
            Success
          </ResponseDescriptionStyled>
        </TbodyStyled>
      </ResponseInerStyled>
    </TestingAreaSizeStyled>
  );
};

export default TestingArea;
