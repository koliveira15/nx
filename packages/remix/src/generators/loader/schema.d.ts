import { NameAndDirectoryFormat } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';

export interface LoaderSchema {
  path: string;
  nameAndDirectoryFormat?: NameAndDirectoryFormat;
}