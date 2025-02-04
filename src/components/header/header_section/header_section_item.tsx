/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import { CommonProps } from '../../common';

type Border = 'left' | 'right' | 'none';

const borderToClassNameMap: { [border in Border]: string | undefined } = {
  left: 'ouiHeaderSectionItem--borderLeft',
  right: 'ouiHeaderSectionItem--borderRight',
  none: undefined,
};

export type OuiHeaderSectionItemProps = CommonProps & {
  /**
   * Side to display a short border on.
   * Not supported in Cascadia theme.
   */
  border?: Border;
  /**
   * ReactNode to render as this component's content
   */
  children?: ReactNode;
};

export const OuiHeaderSectionItem: FunctionComponent<OuiHeaderSectionItemProps> = ({
  border = 'left',
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    'ouiHeaderSectionItem',
    borderToClassNameMap[border],
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
