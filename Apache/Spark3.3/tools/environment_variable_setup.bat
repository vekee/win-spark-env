@ECHO OFF

set spark_env_var=C:\Apache\Spark3.3\tools\Python37

if not defined SPARK_HOME (
    echo adding [SPARK_HOME] as [C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3]
    SETX SPARK_HOME "C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3" /M
    
    set spark_env_var=%spark_env_var%;%%SPARK_HOME%%\bin
) else (
    echo [SPARK_HOME] has been added, can not repeat set.
)

if not defined HADOOP_HOME (
    echo:
    echo:
    echo adding [HADOOP_HOME] as [C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3]
    SETX HADOOP_HOME "C:\Apache\Spark3.3\tools\spark-3.3.0-bin-hadoop3" /M
) else (
    echo [HADOOP_HOME] has been added, can not repeat set.
)

if not defined MAVEN_HOME (
    echo:
    echo:
    echo adding [MAVEN_HOME] as [C:\Apache\Spark3.3\tools\apache-maven-3.6.0]
    SETX MAVEN_HOME "C:\Apache\Spark3.3\tools\apache-maven-3.6.0" /M

    set spark_env_var=%spark_env_var%;%%MAVEN_HOME%%\bin
) else (
    echo [MAVEN_HOME] has been added, can not repeat set.
)

if not defined JAVA_HOME (
    echo:
    echo:
    echo adding [JAVA_HOME] as [C:\Apache\Spark3.3\tools\Java\jdk-11.0.11]
    SETX JAVA_HOME "C:\Apache\Spark3.3\tools\Java\jdk-11.0.11" /M

    set spark_env_var=%spark_env_var%;%%JAVA_HOME%%\bin
) else (
    echo [JAVA_HOME] has been added, can not repeat set.
)

if not defined PYSPARK_PYTHON (
    echo:
    echo:
    echo adding [PYSPARK_PYTHON] as [C:\AWS\Glue3.0\tools\Python37\python.exe]
    SETX PYSPARK_PYTHON "C:\AWS\Glue3.0\tools\Python37\python.exe" /M
) else (
    echo [PYSPARK_PYTHON] has been added, can not repeat set.
)

echo:
echo:
echo adding [%spark_env_var%] into [Path]
SETX Path "%spark_env_var%;%Path%" /M

echo:
echo:
echo Environment variables setup is complete.
echo:
echo:
pause
  