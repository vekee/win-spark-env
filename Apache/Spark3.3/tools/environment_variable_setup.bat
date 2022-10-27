ECHO OFF
if defined SPARK_HOME (
    echo System Environmental variables have been setted
    pause
    exit /b
)

SETX SPARK_HOME "C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3" /M
echo "SPARK_HOME C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3"

SETX HADOOP_HOME "C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3" /M
echo "HADOOP_HOME C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3"

SETX MAVEN_HOME "C:\Apache\Spark3.3\tools\apache-maven-3.6.0" /M
echo "MAVEN_HOME C:\Apache\Spark3.3\tools\apache-maven-3.6.0"

SETX JAVA_HOME "C:\Apache\Spark3.3\tools\Java\jdk-11.0.11" /M
echo "JAVA_HOME C:\Apache\Spark3.3\tools\Java\jdk-11.0.11"

SETX PYSPARK_PYTHON "C:\AWS\Glue3.0\tools\Python37\python.exe" /M
echo "PYSPARK_PYTHON C:\AWS\Glue3.0\tools\Python37\python.exe"


SETX Path "C:\Apache\Spark3.3\tools\Python37;%%JAVA_HOME%%\bin;%%MAVEN_HOME%%\bin;%%SPARK_HOME%%\bin;%Path%" /M
echo "C:\Apache\Spark3.3\tools\Python37;%%JAVA_HOME%%\bin;%%MAVEN_HOME%%\bin;%%SPARK_HOME%%\bin;%%Path%%"

echo System Environmental variables setup is finished
pause
  