<?php

/* Plugin für MODx Evo [[albisClass]]
class Albis {

    /** 
    USAGE
    $albisInclude = new Albis;
    $albisInclude->includePath = "path/to/your/file/nameof.file";
    $albisInclude->fileInclude();
    RETURN
    includes file
    **/
    
    public $includePath = '';
	function fileInclude() {
        global $modx;
        include_once($modx->config['base_path'].'' . $this->includePath);
	}
    
    /** 
    USAGE
    $albisContent = new Albis;
    $albisContent->contentPath = "path/to/your/file/nameof.file";
    $albisContent->fileContent();
    RETURN
    Content of the file
    **/
    
    public $contentPath = '';
	function fileContent() {
        global $modx;
        echo file_get_contents($modx->config['base_path'].'' . $this->contentPath . '', FILE_USE_INCLUDE_PATH);
	}
    
    /** 
    USAGE
    $albisTime = new Albis;
    $albisTime->filePath = "path/to/your/file";
    $albisTime->fileName = "nameof.file";
    $albisTime->fileTimeStamp();
    RETURN
    path/to/your/file/nameof.UNIXTIMESTAMP.file
    **/
    public $filePath = '';
	public $fileName = '';
	function fileTimeStamp() {
        global $modx;
        $pathAbsoluteToFile = $modx->config['base_path'].''.$this->filePath.''.$this->fileName;
        $pathParts = pathinfo($pathAbsoluteToFile);
        $fileWithTime = $this->filePath .''.$pathParts['filename'].'.'.filemtime($pathAbsoluteToFile). '.'.$pathParts['extension'];
        return $fileWithTime;
	}	
}
?>